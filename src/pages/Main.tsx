import Sidebar from '@components/pages/main/Sidebar';
import Content from '@components/pages/main/Content';
import Loader from '@components/common/Loader';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='content-container'>
        <Content />
      </div>
    </div>
  )
}

export default Main;