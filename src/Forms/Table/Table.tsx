import * as React from 'react';
import { memo, ReactElement } from 'react';
import { TableProps } from './TableTypes';

// Components
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';

// Styles
import {
  AddButton,
  StyledTable,
  TableContainer,
  Td,
  TdDrag,
  Th,
} from './Table.styled';
import IconButton from '@root/components/IconButton';

const Table = (props: TableProps): ReactElement => {
  const { handleAddElement, handleDelete, handleEdit, headers, rows } = props;

  return (
    <TableContainer>
      <AddButton
        buttonType='blueText'
        icon={AddIcon}
        onClick={handleAddElement}
      >
        Add Element
      </AddButton>
      <StyledTable>
        <thead>
          <tr>
            <Th></Th>
            <Th>Actions</Th>
            {headers.map((header) => (
              <Th>{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr>
              <TdDrag>
                <IconButton icon={DragIndicatorIcon} />
              </TdDrag>
              <Td>
                <IconButton icon={EditIcon} onClick={() => handleEdit(index)} />
                <IconButton
                  icon={DeleteIcon}
                  onClick={() => handleDelete(index)}
                />
              </Td>
              <Td>{row.fullName}</Td>
              <Td>{row.address}</Td>
              <Td>{row.phoneNumber}</Td>
              <Td>{row.email}</Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default memo(Table);
