window.BENCHMARK_DATA = {
  "lastUpdate": 1793983745616,
  "repoUrl": "https://github.com/d33bs/xarray-sql",
  "entries": {
    "Python benchmarks (pytest-benchmark)": [
      {
        "commit": {
          "author": {
            "email": "ekgto445@gmail.com",
            "name": "d33bs",
            "username": "d33bs"
          },
          "committer": {
            "email": "ekgto445@gmail.com",
            "name": "d33bs",
            "username": "d33bs"
          },
          "distinct": false,
          "id": "c200e442a4293d615ee5466515bcb5a0bf3af3da",
          "message": "Keep benchmark data out of mike's gh-pages dev/ folder\n\nThe default benchmark-data-dir-path is dev/bench. docs.yml's mike\ndeploy replaces dev/ wholesale on every docs push, which would wipe\nthe benchmark history (or race with it) the first time docs\nredeployed after this landed. Use a root-level benchmarks/ path\ninstead -- gh-pages's existing tree (0.3-0.6, dev, latest, index.html,\nversions.json) has nothing by that name.",
          "timestamp": "2026-11-06T09:43:28-07:00",
          "tree_id": "87c9b13b344cfa445ad9b8dbe900904a50f6d7d1",
          "url": "https://github.com/d33bs/xarray-sql/commit/c200e442a4293d615ee5466515bcb5a0bf3af3da"
        },
        "date": 1793983745112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_groupby_mean_over_time",
            "value": 208.8296559591405,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614344376008602",
            "extra": "mean: 4.788591904761168 msec\nrounds: 105"
          }
        ]
      }
    ]
  }
}