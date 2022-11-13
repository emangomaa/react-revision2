
// import GetData from './components/ReactHttp/GetData';
import PostData from './components/ReactHttp/PostData'
function App() {
  return (
    <div className="App">
      <PostData/>
      {/* <GetData/> */}

      {/* using context Provider */}
      {/* <UserProvider value = "eman">
        <CompC/>
      </UserProvider> */}
      
      {/* <Counter 
      render= {(count,increaseCounter)=> (
      <ClickCounter count={count} increaseCounter = {increaseCounter}/>
      )}
      />
      <Counter 
      render= {(count,increaseCounter)=> (
      <HoverCounter count={count} increaseCounter = {increaseCounter}/>
      )}
      /> */}
      {/* <ClickCounter/>
      <HavorCounter/> */}
    </div>
  );
}

export default App;
