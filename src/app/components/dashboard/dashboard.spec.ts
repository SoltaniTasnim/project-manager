import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    component.projects = [
      {
        name: 'Projet 1',
        description: 'Description 1',
        status: 'En cours',
        createdAt: '2026-04-18',
        tasks: [
          { title: 'Tâche 1', priority: 'Haute', status: 'Terminé' },
          { title: 'Tâche 2', priority: 'Basse', status: 'En attente' },
        ],
      },
    ];
    fixture.detectChanges();
  });

  it('should compute dashboard totals', () => {
    expect(component.totalProjects).toBe(1);
    expect(component.totalTasks).toBe(2);
    expect(component.completedTasks).toBe(1);
    expect(component.globalProgress).toBe(50);
  });
});
