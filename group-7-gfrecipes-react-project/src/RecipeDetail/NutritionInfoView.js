
function NutritionInfoView(props) {
    return (
      <div className="nutritionLine">
        <p>Total Fat: {props.data["Total Fat"]}</p>
        <ul>
          <li>Saturated Fat: {props.data["Sat Fat"]}</li>
          <li>Polyunsaturated Fat: {props.data["Poly Fat"]}</li>
          <li>Monounsaturated Fat: {props.data["Mono Fat"]}</li>
        </ul>
        <p>Total Carbs: {props.data["Total Carbs"]}</p>
        <ul>
          <li>Of which sugars: {props.data["Carbs which Sugar"]}</li>
          <li>Net Carbs: {props.data["Net Carbs"]}</li>
        </ul>
        <p>Salt: {props.data["Salt"]}</p>
        <p>Protein: {props.data["Protein"]}</p>
        <p>Fibre: {props.data["Fibre"]}</p>
      </div>
    );
  }

  export default NutritionInfoView;