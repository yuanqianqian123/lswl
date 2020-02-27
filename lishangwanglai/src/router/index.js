import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import './index.css'
import one from '../component/one/one'
import two from '../component/two/two'
import three from '../component/three/three'
import four from '../component/four/four '
import five from '../component/five/five'
function router() { 
    return(
        <div id="box">
            <Switch>
                 <Route path='/index' render={()=>
                     <Header>
                         <Route path='/index/one' component={one}></Route>
                         <Route path='/index/two' component={two}></Route>
                         <Route path='/index/four' component={four}></Route>
                         <Route path='/index/five' component={five}></Route>
                     </Header>
                 } />
                 <Route  path='/about' component={three}></Route>
                 <Redirect from="/" to="/index/five"></Redirect>
            </Switch>
        </div>
    )
 }





 export default router