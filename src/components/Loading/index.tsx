import { LoadingSatus } from './styles';

export function Loading() {
  return (
    <LoadingSatus className="text-center loadingStatus">
      <div className="lds-dual-ring"></div>
      <div>Loading</div>
    </LoadingSatus>
  );
}
