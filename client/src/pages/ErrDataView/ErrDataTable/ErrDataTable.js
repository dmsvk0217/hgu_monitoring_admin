// CustomTable.js
import React from "react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { BiSolidEdit } from "react-icons/bi";
import "./ErrDataTable.css";

const CustomTable = ({ data, columns, openModal, setRowObject }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleEdit = (row, cell) => {
    console.log(row.original);
    setRowObject(row.original);
    openModal();
  };

  return (
    <div className="CustomTable">
      <table className="ErrDataTable">
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
            <tr
              key={row.id}
              style={{ backgroundColor: row.original.done === "yes" ? "white" : "oldlace" }}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {/* edit button icon 설정 */}
                  {cell.id.includes("edit") ? (
                    <BiSolidEdit
                      className="err-edit-button"
                      onClick={() => handleEdit(row, cell)}
                    />
                  ) : null}
                  {/* 순번 설정 */}
                  {cell.id.includes("sequence") ? parseInt(cell.id[0]) + 1 : null}
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
