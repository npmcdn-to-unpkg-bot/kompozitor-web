import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

// Using an ES6 transpiler like Babel
// import {SortableContainer, SortableElement} from 'react-sortable-hoc';

// // Not using an ES6 transpiler
// var Sortable = require('react-sortable-hoc');
// var SortableContainer = Sortable.SortableContainer;
// var SortableElement = Sortable.SortableElement;

const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({value}) => {
    return (
        <li>
            <DragHandle />
            {value}
        </li>
    )
});

const SortableList = SortableContainer(({items}) => {
	return (
		<ul>
			{items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
		</ul>
	);
});


class SortableComponent extends Component {
	constructor(props){
		super(props);
		this.state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    };
    this.onSortEnd = ({oldIndex, newIndex}) => {
        let {items} = this.state;

        this.setState({
            items: arrayMove(items, oldIndex, newIndex)
        });
    };
	}
    
    render() {
        let {items} = this.state;

        return (
            <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />
        )
    }
}

render(<SortableComponent />, document.getElementById('root'));