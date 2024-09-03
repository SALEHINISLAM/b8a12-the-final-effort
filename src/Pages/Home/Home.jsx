import Banner from "./Banner";
import BMICalculator from "./BMICalculator";
import ChangeHabits from "./ChangeHabits";
import RunExtra from "./RunExtra";
import Team from "./Team";
import TrainingExercise from "./TrainingExercise";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ChangeHabits/>
            <RunExtra/>
            <TrainingExercise/>
            <BMICalculator/>
            <Team/>
        </div>
    );
};

export default Home;