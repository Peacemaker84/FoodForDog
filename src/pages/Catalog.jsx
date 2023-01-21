import React, { useContext } from "react";
import Card from "../components/Card/index";
import { Link } from "react-router-dom";
import { EmojiFrown } from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default ({ data }) => {
  const { visibleGoods, user, PATH } = useContext(Ctx);
  // data => visibleGoods
  const paginate = usePagination(visibleGoods, 12); // делаем 12 товаров на 1 странице
  return (
    <>
      {user && (
        <>
          {visibleGoods.length > 0 ? (
            <>
              <h1>Каталог товаров</h1>
              <Pagination hook={paginate} />
              <div className="cards">
                {paginate.setPageData().map((el, i) => (
                  <Link to={`/catalog/${el._id}`} key={el._id}>
                    <Card key={"card_" + i} {...el} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-block">
              <EmojiFrown />
              <p>Простите, по вашему запросу товаров не найдено</p>
              <Link to={PATH} className="btn">
                На главную
              </Link>
            </div>
          )}
        </>
      )}
      {
        !user && (
          <div className="empty-block">
            <EmojiFrown />
            <p>Простите, у вас нет доступа к товарам без авторизации</p>
            <Link to={PATH} className="btn">
              На главную
            </Link>
          </div>
        )
        // <>
        //   <h1>Каталог товаров</h1>
        //   <div className="cards">
        //     {/* Опасно! Работают профи, не пытайтесь повторить это сами!  */}
        //     {data.map((el, i) => (
        //       <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0} />
        //     ))}
        //   </div>
        // </>
      }
    </>
  );
};
