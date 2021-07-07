import { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 8px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  background-color: ${props => (props.isDragging ? 'lightyellow' : 'white')};
`;


class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >            
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
