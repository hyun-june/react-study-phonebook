import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactModal from './component/ContactModal';
import ContactList from './component/ContactList';

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있따.
// 2. 리스트에 유저 이름과 전화번호를 추가 할 수 있다.
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다.
function App() {
  return (
    <div className='containerBook'>
        <div className='content-area'>
          <img className='inner-img' src="/mokoko.png" alt="" />
            <div>
              Phone Book
            </div>
            <div>
              <ContactList/>
            </div>
            <div className='plus-button'>
              <ContactModal/>
            </div>
        </div>
    </div>
  );
}

export default App;
