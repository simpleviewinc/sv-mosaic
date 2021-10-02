import * as React from 'react';
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { FieldDef, SectionDef } from './FormTypes';
// import { FieldDefProps } from "../../components/Field";
const FormFieldText = lazy(() => import('../FormFieldText'));
const FormFieldTextArea = lazy(() => import('../FormFieldTextArea'));
const FormFieldCheckbox = lazy(() => import('../FormFieldCheckbox'));
// import { FormState } from "./FormTypes";
import { actions } from './formUtils';
import './Form.css';

// interface FormProps {
// 	state: FormState;
// 	fields: FieldDefProps[];
// 	dispatch: any;
// }

const componentMap = {
  text: FormFieldText,
  textArea: FormFieldTextArea,
  checkbox: FormFieldCheckbox,
};

function Form(props) {
  const [layout, setLayout] = useState(props.sections);

  useEffect(() => {
    let customLayout: SectionDef[] = [];

    if (props.sections)
      customLayout = JSON.parse(JSON.stringify(props.sections));

    if (props.fields) {
      for (let field of props.fields) {
        if (field.layout) {
          let section = customLayout.length;
          if (field.layout.section !== undefined && field.layout.section >= 0) {
            section = field.layout.section;
          }

          let row = customLayout[section]?.fields?.length;
          if (field.layout.row !== undefined && field.layout.row >= 0) {
            row = field.layout.row;
          }

          let col = customLayout[section]?.fields[row]?.length;
          if (field.layout.col !== undefined && field.layout.col >= 0) {
            col = field.layout.col;
          }

          if (customLayout[section]) {
            customLayout[section].fields[row][col].push(field.name);
          } else {
            customLayout = [
              ...customLayout,
              {
                fields: [[[field.name]]],
              },
            ];
          }
        } else if (!props.sections) {
          customLayout = [
            ...customLayout,
            {
              fields: [[[field.name]]],
            },
          ];
        }

        setLayout(customLayout);
      }
    }
  }, []);

  const onChangeMap = useMemo(() => {
    return props.fields.reduce((prev, curr) => {
      prev[curr.name] = async function(value) {
        await props.dispatch(
          actions.setFieldValue({
            name: curr.name,
            value,
          })
        );

        if (curr.onChange) {
          /**
           * Sending the value will allow devs
           * to do whatever they want with this value
           */
          curr.onChange(value);
        }
      };

      return prev;
    }, {});
  }, [props.fields]);

  const renderFields = (sectionFields: (string | FieldDef)[][][]) => {
    let layout = [...sectionFields];

    return layout.map((row, i) => (
      <div key={i} className='row'>
        {row.map((col, i) => (
          <div key={i} className='col'>
            {col.map((field, i) => {

              const currentField = props.fields?.find(
                (fieldDef) => {
                  return field === fieldDef.name;
                }
              );

              const { type, inputSettings, ...fieldProps } = currentField;

              const Component = componentMap[type];

              const onChange = onChangeMap[fieldProps.name];

              return (
                // Move suspense to form line 76 form.tsx
                <Suspense
                  fallback={<div>Loading...</div>}
                  key={fieldProps.name}
                >
                  <Component
                    {...currentField}
                    value={props.state.data[fieldProps.name] || ''}
                    touched={props.state.touched[fieldProps.name] || false}
                    error={props.state.errors[fieldProps.name] ? true : false}
                    errorText={props.state.errors[fieldProps.name] || ''}
                    onChange={onChange}
                  />
                </Suspense>
              );
            })}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <form className='form'>
      {layout?.map((section, i) => {
        return (
          <div key={i}>
            {section && (
              <div
                key={section.title}
                id={section.title?.replace(/\s+/g, '')}
                className='section'
              >
                {section.title && <h1>{section.title}</h1>}
                {section.description && <p>{section.description}</p>}
                {section.fields && (
                  <div className='rows'>{renderFields(section.fields)}</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
}

export default Form;
