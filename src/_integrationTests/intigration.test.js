import moxios, { requests } from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts Action', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Test',
        body: 'Test'
      },
      {
        title: 'Test',
        body: 'Test'
      },
      {
        title: 'Test',
        body: 'Test'
      },
      {
        title: 'Test',
        body: 'Test'
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts())
      .then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      })

  });

})