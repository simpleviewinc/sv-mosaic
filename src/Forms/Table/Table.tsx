import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { TableProps } from './TableTypes';

// Components
import AddIcon from '@material-ui/icons/Add';
import Button from '@root/forms/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import EditIcon from '@material-ui/icons/Edit';

// Styles
import {
	AddButton,
	AddElementContainer,
	Container,
	StyledIconButton,
	StyledTable,
	StyledTr,
	TableContainer,
	Td,
	TdDrag,
	Th,
	ThDrag,
	THead,
} from './Table.styled';

const Table = (props: TableProps): ReactElement => {
	const {
		actions,
		disabled,
		handleAddElement,
		handleDelete,
		handleEdit,
		headers,
		value,
		onChange,
	} = props;

	const [isDragging, setIsDragging] = useState(false)

	const handleDragEnd = (e) => {
		if (!e.destination) return
		const rowDataCopy = [...value];
		const [source_data] = rowDataCopy.splice(e.source.index, 1);
		rowDataCopy.splice(e.destination.index, 0, source_data);
		setIsDragging(false)
		onChange(rowDataCopy);
	};

	/**
   * When a row is being dragged the dragging state is set to true.
   */
	const handleDragStart = () => {
		setIsDragging(true)
	};

	/**
   * Executes external delete function and removes a row.
   * @param rowIndex of the row that is going to be deleted.
   */
	const deleteRow = (rowIndex: number) => {
		handleDelete(rowIndex);
		const rowDataCopy = [...value];
		rowDataCopy.splice(rowIndex, 1);
		onChange(rowDataCopy);
	};

	return (
		<>
			{value.length === 0 ? (
				<AddElementContainer>
					<Button disabled={disabled} buttonType='secondary' onClick={handleAddElement}>
						ADD ELEMENT
					</Button>
				</AddElementContainer>
			) : (
				<TableContainer>
					<AddButton
						buttonType='blueText'
						icon={AddIcon}
						onClick={handleAddElement}
					>
						Add Element
					</AddButton>
					<DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
						<Container>
							<StyledTable>
								<THead>
									<tr>
										<ThDrag></ThDrag>
										<Th>Actions</Th>
										{headers.map((header, index) => (
											<Th key={`${header}-${index}`}>{header}</Th>
										))}
									</tr>
								</THead>
								<Droppable droppableId='droppable-rows'>
									{(provider) => (
										<tbody ref={provider.innerRef} {...provider.droppableProps}>
											{value?.map((row, rowIndex) => (
												<Draggable
													key={row.id}
													draggableId={row.id}
													index={rowIndex}
												>
													{(provider) => (
														<StyledTr
															{...provider.draggableProps}
															ref={provider.innerRef}
															isDragging={isDragging}
														>
															<TdDrag {...provider.dragHandleProps}>
																<DragIndicatorIcon />
															</TdDrag>
															<Td>
																<StyledIconButton
																	disabled={disabled}
																	icon={EditIcon}
																	onClick={() => handleEdit(rowIndex)}
																/>
																<StyledIconButton
																	disabled={disabled}
																	icon={DeleteIcon}
																	onClick={() => deleteRow(rowIndex)}
																/>
																{actions?.length > 0 && (
																	<>
																		{actions.map((action, index) => (
																			<StyledIconButton
																				disabled={disabled}
																				key={`${action.label}-${index}`}
																				icon={action.icon}
																				onClick={() => action.actionFnc(rowIndex)}
																			/>
																		))}
																	</>
																)}
															</Td>
															{row.items.map((item) => {
																return <Td key={item}>{item}</Td>;
															})}
														</StyledTr>
													)}
												</Draggable>
											))}
											{provider.placeholder}
										</tbody>
									)}
								</Droppable>
							</StyledTable>
						</Container>
					</DragDropContext>
				</TableContainer>
			)}
		</>
	);
};

export default memo(Table);
