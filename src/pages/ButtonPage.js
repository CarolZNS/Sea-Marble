import { MdAlarm } from "react-icons/md";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <MdAlarm/>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary className="my-2">
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <Button>Something</Button>
    </div>
  );
}

export default ButtonPage;
