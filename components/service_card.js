export default class ServiceCard extends React.Component {
  render() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-2xl font-bold">{this.props.title}</h3>
        <p className="text-lg">{this.props.text}</p>
      </div>
    );
  }
}