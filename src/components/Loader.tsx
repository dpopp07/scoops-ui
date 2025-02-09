import './Loader.css';

// From https://loading.io/css/

export default function Loading() {
  return (
    <section id="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
