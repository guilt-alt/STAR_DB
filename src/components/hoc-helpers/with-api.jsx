import { ApiConsumer } from '../api-context';

const withApi = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ApiConsumer>
        {
          (api) => {
            const serviceProps = mapMethodsToProps(api);

            return (
              <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </ApiConsumer>
    )
  }
}

export default withApi;
