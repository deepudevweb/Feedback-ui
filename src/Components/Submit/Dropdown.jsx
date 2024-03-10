import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Submit.css'


function DropdownItemTagsExample() {
  return (
    <>
      <div className="dropdown">
        <label htmlFor="dropdown-item-button">Choose a section</label>
        <DropdownButton id="dropdown-item-button" title="Select">
          {/* <Dropdown.ItemText id='dropdown-box'>Dropdown item text</Dropdown.ItemText> */}
          <Dropdown.Item as="button">Concept cards</Dropdown.Item>
          <Dropdown.Item as="button">Interview questions</Dropdown.Item>
          <Dropdown.Item as="button">Practice Questions</Dropdown.Item>
          <Dropdown.Item as="button">Quizzes</Dropdown.Item>
          <Dropdown.Item as="button">Others</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default DropdownItemTagsExample;