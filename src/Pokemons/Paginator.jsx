import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import s from './Pokemons.module.css';

const Paginator = (props) => {

    let onChange = page => {
        props.onPageChange(page)
    };

    return <Pagination current={props.currentPage} 
    total={200} 
    defaultPageSize={10}
    onChange= {onChange}
    showSizeChanger= {false}
    className= {s.paginator}
    />
    
}

export default Paginator;