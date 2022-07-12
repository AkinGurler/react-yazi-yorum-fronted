
import { BrowserRouter as Router, Route } from 'react-router-dom'
import YaziDetayi from './components/YaziDetayi'
import YaziListesi from './components/YaziListesi'
import YaziEkle from './components/YaziEkle'
import YaziDuzenle from './components/YaziDuzenle'



export default function App() {
  

    return (
      <Router>
    <div className='main_wrapper' >
      <header>
      <div className="ui raised very padded text container segment">
        <Route path="/" exact component={YaziListesi} />
        <Route path="/posts/:id" exact component={YaziDetayi} />
        <Route path="/yaziekle" component={YaziEkle} />
        <Route path="/posts/:id/edit" component={YaziDuzenle} />
        
  
         
        </div>
      </header>
    </div>
    </Router>
  )
}
