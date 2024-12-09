import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/state-type';
import { SortingOption } from '../../enums';
import { changeOffersSortingAction } from '../../store/action';

function buildOptionClassName(option: SortingOption, activeOption: SortingOption) {
  const activeOptionString = option === activeOption ? ' places__option--active' : '';
  return `places__option${activeOptionString}`;
}

function buildOption(option: SortingOption, activeOption: SortingOption, handleOptionClick: (option: SortingOption) => void, index: number) {
  return (
    <li className={buildOptionClassName(option, activeOption)}
      key={index}
      onClick={(e) => {
        e.preventDefault();
        handleOptionClick(option);
      }}
    >
      {option}
    </li>
  );
}

function SortingOptions() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const activeOption = useSelector((state: State) => state.sortingOption);

  const toggleOptions = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: SortingOption) => {
    dispatch(changeOffersSortingAction(option));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOptions}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {Object.values(SortingOption).map((option, index) =>
          buildOption(option, activeOption, handleOptionClick, index)
        )}
      </ul>
    </form>
  );
}

export default SortingOptions;
