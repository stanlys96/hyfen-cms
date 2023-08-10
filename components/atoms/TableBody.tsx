import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
};

export default function TableBody(props: Props) {
  return (
    <td
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
      className={[
        'whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6 text-white text-center',
        props.className,
      ].join(' ')}
    >
      {props.children}
    </td>
  );
}
