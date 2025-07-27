import ReactMarkDown from 'react-markdown';

export const BlockContent = (props: any) => {
  return (
    <div className='cosmic-card rounded-2xl p-2 md:p-4 lg:p-6'>
      <div className='prose prose-lg prose-invert max-w-none'>
        <ReactMarkDown>{props.children}</ReactMarkDown>
      </div>
    </div>
  );
};
