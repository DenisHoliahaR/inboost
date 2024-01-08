import React, { ReactNode, useEffect } from 'react';
import Dropdown from './UI/Dropdown/Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
    const nodes = useSelector((root: RootState) => root.inboost.nodes);

    useEffect(() => {
        sessionStorage.setItem('nodes', JSON.stringify(nodes));
    }, [nodes]);

    let dropdowns: ReactNode = nodes.map((dropdown, index) => {
        let name = '';
        if (index % 2 == 0) {
            name = nodes.join('-').slice(0, index + 3);
        } else {
            name = nodes.join('-').slice(0, index + 2);
        }
        return <Dropdown title={`Варіант ${name}`} id={index + 1} key={index} />;
    }, []);

    if (nodes.length != 0) {
        const name = nodes.join('-');
        dropdowns = [
            ...dropdowns,
            <Dropdown title={`Варіант ${name}-?`} id={nodes.length + 1} key={nodes.length + 1} />,
        ];
    }

    return (
        <div className="app">
            {nodes.length == 0 ? <Dropdown title="Оберіть значення" id={1} /> : null}
            {dropdowns && dropdowns}
        </div>
    );
}

export default App;
