import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Theading(props: Props) {
  return (
    <thead
      className={[
        'relative bg-appShade300 whitespace-nowrap text-center',
        props.className,
      ].join(' ')}
    >
      {props.children}
    </thead>
  );
}
