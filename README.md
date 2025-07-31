# Oscillator_Sim

# Гармонічний осцилятор / Harmonic Oscillator

> Вебсимуляція механічних коливань за допомогою HTML, CSS та JavaScript.  
> Web simulation of a one-dimensional harmonic oscillator using HTML, CSS, and JavaScript.

---

## Опис / Description

Цей навчальний проєкт демонструє моделювання механічних коливань із можливістю налаштування параметрів, графічною візуалізацією та підтримкою кількох фізичних моделей.  
Симуляція відображає рух кульки у реальному часі та будує відповідні графіки зміщення та швидкості.

This educational project demonstrates the simulation of mechanical vibrations with the ability to configure parameters, graphical visualization, and support for multiple physical models. 
The simulation displays the movement of the ball in real time and builds the corresponding displacement and velocity graphs.

---

## Реалізовані моделі коливань/Implemented vibration models

| Модель                   | Фізичний зміст                                                            |   |                                            |
| ------------------------ | ------------------------------------------------------------------------- | - | ------------------------------------------ |
| 1. Гармонічний осцилятор | $a = -\frac{kx}{m}$ — класичні пружинні коливання                         |   |                                            |
| 2. Вимушені коливання    | $a = \frac{-kx + F_0 \cos(\omega t)}{m}$ — коливання з зовнішньою силою   |   |                                            |
| 3. Тертя (знакове)       | $a = \frac{-kx - k_1 \cdot \text{sign}(v)}{m}$ — сухе (асиметричне) тертя |   |                                            |
| 4. Опір (лінійний)       | $a = \frac{-kx - \mu v}{m}$ — лінійне згасання                            |   |                                            |
| 5. Нелінійне тертя       | ( a = (-k * x - μ * v - k₁ * v * |v|) / m ) — залежність від квадрату швидкості  |   |                                            |
| 6. Биття                 | $x(t) = A \sin(f_1 t) + A \sin(f_2 t)$ — інтерференція двох частот        |   |                                            |


| Model                    | Physical meaning                                                                    |   |                                            |
| ------------------------ | ----------------------------------------------------------------------------------- | - | ------------------------------------------ |
| 1. Harmonic oscillator   | $a = -\frac{kx}{m}$ — classical spring oscillations                                 |   |                                            |
| 2. Forced oscillations   | $a = \frac{-kx + F_0 \cos(\omega t)}{m}$ — oscillations with an external force      |   |                                            |
| 3. Friction (sign)       | $a = \frac{-kx - k_1 \cdot \text{sign}(v)}{m}$ — dry (asymmetric) friction          |   |                                            |
| 4. Resistance (linear)   | $a = \frac{-kx - \mu v}{m}$ — linear damping                                        |   |                                            |
| 5. Nonlinear friction    | ( a = (-k * x - μ * v - k₁ * v * |v|) / m ) — dependence on the square of velocity  |   |                                            |
| 6. Beating               | $x(t) = A \sin(f_1 t) + A \sin(f_2 t)$ — interference of two frequencies            |   |                                            |


## Параметри / Parameters

Інтерфейс дозволяє змінювати наступні параметри:

- `x` — початкова координата (м)  
- `v` — початкова швидкість (м/с)  
- `t` — початковий момент часу (с)  
- `m` — маса об’єкта (кг)  
- `k` — жорсткість пружини (Н/м)  
- `F0` — амплітуда зовнішньої сили (Н)  
- `omega` — циклічна частота зовнішньої сили (рад/с)  
- `k1` — коефіцієнт квадратичного опору (Н·с²/м²)  
- `mu` — коефіцієнт лінійного тертя (Н·с/м)  
- `f1` — сила тертя при русі вправо (Н)  
- `f2` — сила тертя при русі вліво (Н)  
- `amplitude` — амплітуда коливань (м)  
- `dt` — крок інтегрування за часом (с)

The interface allows adjusting the following parameters:

- `x` — initial coordinate (m)
- `v` — initial velocity (m/s)
- `t` — initial time (s)
- `m` — mass of the object (kg)
- `k` — spring stiffness (N/m)  
- `F0` — amplitude of external force (N)  
- `omega` — cyclic frequency of external force (rad/s)  
- `k1` — coefficient of quadratic resistance (N·s²/m²)  
- `mu` — coefficient of linear friction (N·s/m)  
- `f1` — friction force when moving to the right (N)
- `f2` — friction force when moving to the left (N)
- `amplitude` — amplitude of oscillations (m)
- `dt` — time integration step (s)

---

## 📊 Результат / Output

- Анімація руху кульки (в реальному часі)  
- Графік

- Animation of the ball’s motion (in real-time)  
- Graph

---

## ▶️ Як запустити / How to Run

Просто відкрийте `index.html` у вашому браузері:

Just open `index.html` in your browser:

```bash
# або подвійний клік
open index.html
