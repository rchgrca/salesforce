import ExerciseRoute from 'routes/Exercise'

describe('(Route) Exercise', () => {
  it('returns a route configuration object', () => {
    expect(typeof ExerciseRoute({})).to.equal('object')
  })

  it('has a path \'exercise\'', () => {
    expect(ExerciseRoute({}).path).to.equal('exercise')
  })
})
