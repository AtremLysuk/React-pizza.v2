import React from "react";
import debounce from 'lodash.debounce';
import styles from "./Search.module.scss";
import { setSearchValue } from "../../redux/slices/filterSlise";
import { useDispatch } from "react-redux";



export default function Search() {

  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () =>{
    dispatch(setSearchValue(''))
    setValue("");
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 500),
    [],
  );


  const onChangeInput = event =>{
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 64 64"
      >
        <style type="text/css">.st0{"fill:#134563;"}</style>
        <g>
          <g id="Icon-Search" transform="translate(30.000000, 230.000000)">
            <path
              class="st0"
              d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z"
              id="Fill-1"
            />
            <polyline
              class="st0"
              id="Fill-2"
              points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    "
            />
          </g>
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search pizza..."
        type="text"
      />
      {value && (      
        <svg
        onClick={(e) => onClickClear}
        className={styles.close}
        data-name="Capa 1"
        id="Capa_1"
        viewBox="0 0 20 19.84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
      </svg>)}
    </div>
  );
}
