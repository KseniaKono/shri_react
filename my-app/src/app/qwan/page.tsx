import { Card } from "../../../components/cards/Card";
import { Accordion } from "../../../components/accordion/Accordion";
export default function Page() {
    return (
      <div>
      <Card title="Вопросы-ответы" />
      <Accordion title="Что такое Билетопоиск?">
        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.
      </Accordion>
      <Accordion title="Какой компании принадлежит Билетопоиск?">
        Билетопоиск определенно кому-то принадлежит
      </Accordion>
      <Accordion title="Как купить билет на Билетопоиск?">
        С удовольствием
      </Accordion>
      <Accordion title="Как оставить отзыв на Билетопоиск?">
        С позитивом
      </Accordion>
    </div>
    )
}