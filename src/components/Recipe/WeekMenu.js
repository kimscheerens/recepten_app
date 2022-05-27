import React from "react";

const WeekMenu = () => {
  const today = new Date();

  return (
    <div className="weeklyMenu-container">
      <h3 className="title">Weekly Menu</h3>
      <div>
        Today:
        {today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear()}
      </div>
      <div className="buttons">
        <button className="previous">
          <i className="previous__icon"> &#171;</i>
        </button>
        <button className="next">
          <i className="next__icon"> &#187; </i>
        </button>
      </div>

      <div className="WeeklyMenu">
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Monday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
          {/* <a href={`/recipe/${recipe.id}`}> */}
            <button className="WeeklyMenu__btn" >view 🍽️</button>
            {/* </a> */}
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Tuesday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Wednesday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Thursday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Friday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Saturday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
        <ul className="WeeklyMenu__container">
          <h3 className="WeeklyMenu__container__title">Sunday</h3>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Breakfast </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>

            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Lunch </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Dinner </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
          <li className="WeeklyMenu__item">
            <span className="WeeklyMenu__title"> Snack </span>
            <div className="WeeklyMenu__btn-group">
              <button className="WeeklyMenu__btn">🗑️</button>
              <button className="WeeklyMenu__btn">✏️</button>
            </div>
            <img />
            <p className="WeeklyMenu__recipe-title">Title recipe</p>
            <button className="WeeklyMenu__btn">view 🍽️</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeekMenu;
