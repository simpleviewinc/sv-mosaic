import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

	// State variables
	const [rowData, setRowData] = useState(rows);

	const handleDragEnd = (e) => {
		if (!e.destination) return;
		const rowDataCopy = Array.from(rowData);
		const [source_data] = rowDataCopy.splice(e.source.index, 1);
		rowDataCopy.splice(e.destination.index, 0, source_data);
		setRowData(rowDataCopy);
	};

	/**
   * Executes external delete function and removes a row.
   * @param rowIndex of the row that is going to be deleted
   */
	const deleteRow = (rowIndex: number) => {
		handleDelete(rowIndex);
		const rowDataCopy = [...rowData];
		rowDataCopy.splice(rowIndex, 1);
		setRowData(rowDataCopy);
	}

	return (
		<TableContainer>
			<AddButton
				buttonType='blueText'
				icon={AddIcon}
				onClick={handleAddElement}
			>
        Add Element
			</AddButton>
			<DragDropContext onDragEnd={handleDragEnd}>
				<StyledTable>
					<thead>
						<tr>
							<Th></Th>
							<Th>Actions</Th>
							{headers.map((header, index) => (
								<Th key={`${header}-${index}`}>{header}</Th>
							))}
						</tr>
					</thead>
					<Droppable droppableId='droppable-rows'>
						{(provider) => (
							<tbody ref={provider.innerRef} {...provider.droppableProps}>
								{rowData?.map((row, index) => (
									<Draggable key={row.id} draggableId={row.id} index={index}>
										{(provider) => (
											<tr {...provider.draggableProps} ref={provider.innerRef}>
												<TdDrag {...provider.dragHandleProps}>
													<IconButton icon={DragIndicatorIcon} />
												</TdDrag>
												<Td>
													<IconButton
														icon={EditIcon}
														onClick={() => handleEdit(index)}
													/>
													<IconButton
														icon={DeleteIcon}
														onClick={() => deleteRow(index)}
													/>
												</Td>
												{row.items.map((item) => {
													return <Td key={item}>{item}</Td>;
												})}
											</tr>
										)}
									</Draggable>
								))}
								{provider.placeholder}
							</tbody>
						)}
					</Droppable>
				</StyledTable>
			</DragDropContext>
		</TableContainer>
	);
};

export default memo(Table);
