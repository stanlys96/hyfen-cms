import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
};

export default function TableHead(props: Props) {
  return (
    <th
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
      scope="col"
      className={[
        'py-4 pl-4 pr-3 text-sm text-white sm:pl-6 text-center',
        props.className,
      ].join(' ')}
    >
      {props.children}
    </th>
  );
}
