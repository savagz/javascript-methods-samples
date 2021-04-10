/**
 * Reduce
  {
    'Phase 1': [
      { Step: 'Step 1', Task: 'Task 1', Value: '5' },
      { Step: 'Step 1', Task: 'Task 2', Value: '10' },
      { Step: 'Step 2', Task: 'Task 1', Value: '15' },
      { Step: 'Step 2', Task: 'Task 2', Value: '20' }
    ],
    'Phase 2': [
      { Step: 'Step 1', Task: 'Task 1', Value: '25' },
      { Step: 'Step 1', Task: 'Task 2', Value: '30' },
      { Step: 'Step 2', Task: 'Task 1', Value: '35' },
      { Step: 'Step 2', Task: 'Task 2', Value: '40' }
    ]
  }
 */

const inputArray = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
];

var newobject = inputArray.reduce(function (a, e) {
  let estKey = (e['Phase']);

  let newe = e;
  delete newe['Phase'];
  (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(newe);
  return a;
}, {});

console.log(newobject);