// CustomTable.js
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./NIDataTable.css";

const CustomTable = ({ data, columns, openEditModal, openDeleteModal, setRowObject }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleEdit = (row, cell) => {
    // console.log(row.original);
    setRowObject(row.original);
    openEditModal();
  };

  const handleDelete = (row, cell) => {
    console.log(row.original);
    setRowObject(row.original);
    openDeleteModal();
  };

  return (
    <div className="CustomTable">
      <table className="NIDataTable">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {cell.id.includes("edit") ? (
                    <BiSolidEdit className="ni-edit-button" onClick={() => handleEdit(row, cell)} />
                  ) : null}
                  {cell.id.includes("delete") ? (
                    <RiDeleteBin6Line
                      className="ni-edit-button"
                      onClick={() => handleDelete(row, cell)}
                    />
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
