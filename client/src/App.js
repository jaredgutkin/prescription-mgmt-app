import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import NotFound from './pages/NotFound';
import Prescription from './pages/Prescription';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        prescriptions: {
          merge(existing, incoming){
            return incoming
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prescriptions/:id' element={<Prescription />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          </div>
        </Router>

      </ApolloProvider>
    </>

  );
}

export default App;
