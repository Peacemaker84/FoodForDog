import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Api } from "../Api";
import Ctx from "../Ctx";

export default () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(100);
  const [wight, setWight] = useState("");
  const [stock, setStock] = useState(10);
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [pictures, setPictures] = useState("");

  const { api, PATH, setGoods } = useContext(Ctx);
  const navigate = useNavigate();
  // функция к кнопке "Добавить"
  const handler = (e) => {
    e.preventDefault();
    let body = {
      name: name || "Название отсутствует",
      price: price || 0,
      wight: wight || "unknown",
      stock: stock || 0,
      description: description || "Тут скоро появится описание товара",
      discount: discount,
      pictures: pictures,
    };
    console.log(body);
    api
      .addProduct(body) // добавляем товар на сервер
      // получаем ответ от сервера и преобразовываем его в объект
      .then((res) => res.json())
      // получаем даные, что ответ положительный
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setGoods((prev) => [...prev, data]);
          clear();
          navigate(`${PATH}catalog/${data._id} `);
        }
      });
  };
  // clear очищает форму после добавления нового товара
  const clear = (e) => {
    setName("");
    setPrice(100);
    setWight("");
    setStock(0);
    setDescription("");
    setPictures("");
  };

  return (
    <>
      <h1>Добавить товар</h1>
      <Form onSubmit={handler}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="" mb-3>
              <Form.Label>Название товара</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="" mb-3>
              <Form.Label>Цена</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                // step="1" возможность менять цену на +-1
                min={0} // не может быть ниже 0
              ></Form.Control>
            </Form.Group>
            <Form.Group className="" mb-3>
              <Form.Label>Вес</Form.Label>
              <Form.Control
                type="number"
                value={wight}
                placeholder="100г"
                onChange={(e) => setWight(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="" mb-3>
              <Form.Label>Количество</Form.Label>
              <Form.Control
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                min={0}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="" mb-3>
              <Form.Label>Скидка</Form.Label>
              <Form.Select
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                min={0}
              >
                <option value={0}>Без скидки</option>
                <option value={5}>5%</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
                <option value={25}>25%</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <div
              className="form-preview mb-2"
              style={{
                backgroundImage: pictures
                  ? `url(${pictures})`
                  : "url(https://www.chanchao.com.tw/images/default.jpg)",
              }}
            />
            <Form.Group className="mb-3">
              <Form.Label>Изображение</Form.Label>
              <Form.Control
                type="url"
                value={pictures}
                onChange={(e) => setPictures(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant={"warning"} type="submit">
              Добавить
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

/* 
название товара
Цена
Количество на складе
Вес
Скидка
Описание
Изображение
*/
