import { LuLoader2 } from 'react-icons/lu';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className="flex justify-center items-center w-full h-full absolute bg-gray-950/35">
      <LuLoader2 className="size-10 animate-spin text-primary" />
    </div>
  );
};

export default Loading;
