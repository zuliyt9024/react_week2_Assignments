
import Component3 from "./Component3";

function Component2({ a, b, c, d, e, f }) {
  return (
    <div>
      <h3>Component2 (Does NOT use props)</h3>
      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default Component2;
