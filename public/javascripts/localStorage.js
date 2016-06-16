/**
 * Created by Tchowa Adonis on 16/03/2016.
 */

function getLocalStorage(){
    try {
        if (!!window.localStorage) return window.localStorage;
    } catch(e)
    {
        return undefined;
    }
}

function getAllItems(localStorage){
    var key, value, tab;
    for (var i in localStorage){
        key = localStorage.getItem(i);
        value = localStorage.getItem(key);
        tab[key] = value;
    }
    return tab;
}

function removeAllItems(localStorage){
    localStorage.clear();
}

function removeItem(localStorage, key, item){
    var st = localStorge.getItem(key);
    st = st.spit(',');
    for (i=0; i<st.length; i++){
        if( st[i] == key){
            st[i] = '';
            break;
        }
    }
    return st.join(',');
}