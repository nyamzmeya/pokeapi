import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import s from './Pokemons.module.css';

const Paginator = (props) => {
    

    let onChange = page => {
        props.onPageChange(page)
    };

    let state = { matches: window.matchMedia("(max-width: 575px)").matches };

    return <>
    {state.matches && (<Pagination simple defaultCurrent={props.currentPage} 
    total={200} 
    defaultPageSize={10}
    onChange= {onChange}
    showSizeChanger= {false}
    className= {s.paginator}
    />)}
    {!state.matches && (<Pagination current={props.currentPage} 
    total={200} 
    defaultPageSize={10}
    onChange= {onChange}
    showSizeChanger= {false}
    className= {s.paginator}
    />)}
    </>
    
}

export default Paginator;