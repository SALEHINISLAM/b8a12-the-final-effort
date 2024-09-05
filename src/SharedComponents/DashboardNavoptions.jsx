import { NavLink } from "react-router-dom";

export const learnerNavOptions=<>
<li>
    <NavLink to={'/dashboard/learnerhome'} className={'btn'}>
            Learner Home
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/findTrainer'} className={'btn'}>
            Find Trainer
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/bookedTrainer'} className={'btn'}>
            Booked Trainer
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/paymentHistory'} className={'btn'}>
            Payment History
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/myTrainer'} className={'btn'}>
            My Trainer
    </NavLink>
</li>
</>

export const trainerNavOptions=<>
<li>
    <NavLink to={'/dashboard/trainerhome'} className={'btn'}>
        Trainer Home
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/myLearner'} className={'btn'}>
        My Learner
    </NavLink>
</li>
<li>
    <NavLink to={'/dashboard/myBalance'} className={'btn'}>
        Check Balance
    </NavLink>
</li>
</>