import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function DishSkeleton() {
  return (
    <SkeletonTheme baseColor='#ccc' highlightColor='#eee'>
      <div>
        <Skeleton
          count={1}
          height={200}
          width='100%'
          style={{ marginBottom: '20px' }}
        />

        <div className='relative mb-2'>
          <Skeleton count={1} height={24} width='34%' inline={true} />
          <Skeleton
            count={1}
            height={24}
            width='20%'
            inline={true}
            style={{ marginLeft: '40%' }}
          />
        </div>
        <Skeleton count={1} height={24} width='50%' />
      </div>
    </SkeletonTheme>
  );
}
