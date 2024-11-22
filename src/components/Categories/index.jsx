import React from 'react';

const arrCategories = ['Все', 'Мясные', 'Вегетарианска', 'Гриль', 'Острые', 'Закрытые'];

const Categories = React.memo(function Categories({category, onClickCategory}) {
    // const [activeCategory, setActiveCategory] = React.useState(0)
    // const onSelectCategory = (index) => {
    //     setActiveCategory(index);
    // }
    return (
        <div className="categories">
            <ul>
                {arrCategories.map((nameCategory, index) => (
                    <li key={`${index}__${nameCategory}`}
                        className={category === index ? 'active' : ''}
                        onClick={() =>onClickCategory(index)}
                    >{nameCategory}</li>
                ))}
            </ul>
        </div>
    );
})

export default Categories;
