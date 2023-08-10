import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Tbody(props: Props) {
  return (
    <tbody
      className={['relative bg-app-background', props.className].join(' ')}
    >
      {props.children}
    </tbody>
  );
}
