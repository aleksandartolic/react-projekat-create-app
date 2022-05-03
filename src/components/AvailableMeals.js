import Card from './Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '10 Sarajevskih cevapa',
    description: '10 cevapa, po originalnoj recepturi sa najkvalitetnijim mesom.',
    price: 540,
  },
  {
    id: 'm2',
    name: '5 Sarajevskih cevapa',
    description: '5 cevapa, po originalnoj recepturi sa najkvalitetnijim mesom.',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Gurmanska pljeskavica',
    description: 'Ako ne znate sta zelite, odaberite ovo. Vrhunsko meso punjeno slaninom i sirom - bez greske!',
    price: 360,
  },
  {
    id: 'm4',
    name: 'Belo meso',
    description: 'Grilovano belo meso',
    price: 290,
  },
  {
    id: 'm5',
    name: 'Rostilj kobasica',
    description: 'Jedan par pikantnih rostilj kobasica',
    price: 260,
  },
  {
    id: 'm6',
    name: 'Dimljeni batak',
    description: 'Socan, raskoscen dimljeni batak',
    price: 290,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
