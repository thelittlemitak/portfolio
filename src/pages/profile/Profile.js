import "./style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Profile() {
  return (
    <div>
      <Header></Header>
      <main className="main-profile-container">
        <h3 class="h3-profile">
          Temporary goals
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            These are goals that, after they are accomplished, they are done
            forever. Normally, you would fill this up with your biggest dreams,
            like a new job or a new milestone in your preferred hobby.
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">What has to happen to accomplish it?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="tgtb">
            <tr>
              <th class="table-goal">Code</th>
              <td>Get a coding job</td>
              <td>
                <div class="checkbox-container">
                  <input
                    type="checkbox"
                    class="table-checkbox"
                    data-test="the 0 one"
                  />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="tgAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Continuous goals (time dependent)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            These are the goals that can be accomplished before the day ends.
            Here you may put the activities that are part of your new habits and
            that they are accomplished after X amount of time, like having a
            30min walk or meditating 20min in the morning.
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">How often?</th>
            <th class="table-top">For how long?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="cgttb">
            <tr>
              <th class="table-goal">Exercise</th>
              <td>Daily</td>
              <td>30 min</td>
              <td>
                <div class="checkbox-container">
                  <input
                    type="checkbox"
                    class="table-checkbox"
                    data-test="exercise"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">Meditate</th>
              <td>Daily</td>
              <td>15 min</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="cgtAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Continuous goals (action dependent)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            These are the goals that can be accomplished before the day ends but
            that they only depend on a task to be done, no matter the time. An
            example could be tidying up your bedroom or prepare the meals for
            the weekend.
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">How often?</th>
            <th class="table-top">Which action?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="cgatb">
            <tr>
              <th class="table-goal">Order</th>
              <td>Weekly</td>
              <td>Clean the house</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">Diet</th>
              <td>Weekly</td>
              <td>Fridge always with diet food</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="cgaAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Limited activities
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            Less is more. Spending less time doing some activities can give you
            more room and peace of mind for your goals. But never forget to take
            some time for you to rest and relax. We are not robots!
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Activity</th>
            <th class="table-top">How often?</th>
            <th class="table-top">Daily time allowed</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="latb">
            <tr>
              <th class="table-goal">Facebook</th>
              <td>Daily</td>
              <td>10 min</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">TV shows</th>
              <td>L-X-F-S-D</td>
              <td>15 min</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="laAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Forbidden activities
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            Here you can add the habits that you want to avoid (e.g. biting your
            nails), but also temporary restrictions (by adding a date) that can
            help you focusing on your goals for some limited time (e.g. playing
            video games or using your phone).
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Activity</th>
            <th class="table-top">Until when?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="fatb">
            <tr>
              <th class="table-goal">Instagram</th>
              <td>01/03/2029</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="faAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Social gatherings
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            Simple schedule for your social life and networking purposes.
            Remember that spending time with others it's important, at least
            once a week; healthy relationships will make you feel better about
            life (and eventually make you work harder).
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Event</th>
            <th class="table-top">Date</th>
            <th class="table-top">Notes</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="sgtb">
            <tr>
              <th class="table-goal">Linda's birthday</th>
              <td>01/03/2023</td>
              <td>Costume party (metal and rock). Bring a cake.</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="sgAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Priorities
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="title-icons"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <div class="info-box info-box--hidden">
            All the above can be overwhelming at the moment of taking action. So
            here you will find a small list of (up and down draggable)
            priorities to be sure you know right now what's next.
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Priority</th>
            <th class="table-top">Goal</th>
            <th class="table-top">Change priority</th>
            <th class="table-top">Done for today?</th>
          </thead>
          <tbody class="wrapper">
            <tr>
              <th class="table-goal">#1</th>
              <td>Rest</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#2</th>
              <td>Diet</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#3</th>
              <td>Meditate</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#4</th>
              <td>Exercise</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#5</th>
              <td>Data</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
