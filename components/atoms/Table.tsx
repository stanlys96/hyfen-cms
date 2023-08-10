import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Table(props: Props) {
  return (
    <div className={['relative', props.className].join(' ')}>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg border border-app-shade">
              <table className="min-w-full divide-y divide-app-shade/70">
                {props.children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
