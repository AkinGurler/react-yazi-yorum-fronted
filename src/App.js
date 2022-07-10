
import { BrowserRouter as Router, Route } from 'react-router-dom'
import YaziDetayi from './components/YaziDetayi'
import YaziListesi from './components/YaziListesi'
import YaziEkle from './components/YaziEkle'



export default function App() {
  

    return (
      <Router>
    <div className='main_wrapper' >
      <header>
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component={YaziListesi} />
        <Route path="/posts/:id" component={YaziDetayi} />
        <Route path="/yaziekle" component={YaziEkle} />
        
  
         
        </div>
      </header>
    </div>
    </Router>
  )
}
