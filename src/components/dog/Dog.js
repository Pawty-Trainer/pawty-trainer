import './Dog.css';
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { DELETE_DOG } from '../../utils/graph_mutations';

export const Dog = ({ matchingDog, removeDog }) => {
  let history = useHistory()
  const [deleteDog] = useMutation(DELETE_DOG)

  const handleSubmit = (event) => {
    event.preventDefault()
    deleteDog({
      variables: {
        id: Number(matchingDog.id)
      }
    })
    removeDog(matchingDog)
    history.push("/")
  }

  return (
    <section className="dog-details">
      <dl>
        <dt>Dog ID</dt>
        <dd>{matchingDog.id}</dd>

        <dt>Dog Name</dt>
        <dd>{matchingDog.name}</dd>

        <dt>Dog Age</dt>
        <dd>{matchingDog.age}</dd>

        <dt>Dog Breed</dt>
        <dd>{matchingDog.breed}</dd>
      </dl>
      <button onClick={event => handleSubmit(event)}>Delete This Dog</button>
    </section>
  )
}