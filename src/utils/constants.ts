import CLOUDSImage from "../assets/images/clouds.png";
import BIRDImage from "../assets/images/bird.png";
import GROUNDImage from "../assets/images/ground.png";

export const INTERVAL = 20;
export const CANVAS_WIDTH = 300;
export const CANVAS_HEIGHT = 450;

// clouds
export const CLOUDS = new Image();
CLOUDS.src = CLOUDSImage;
export const CLOUDS_HEIGHT = 280;
export const CLOUDS_WIDTH = 300;
export const CLOUDS_X = 0;
export const CLOUDS_Y = 0;

// bird
export const BIRD = new Image();
BIRD.src = BIRDImage;
export const BIRD_HEIGHT = 50;
export const BIRD_WIDTH = 50;

// ground
export const GROUND = new Image();
GROUND.src = GROUNDImage;
export const GROUND_HEIGHT = 200;
export const GROUND_WIDTH = CANVAS_WIDTH;
export const GROUND_Y = CANVAS_HEIGHT - GROUND_HEIGHT;
export const HEIGHT_GROUND = 59;

// pipes
export const PIPE_WIDTH = 40;
export const PIPE_HEIGHT = CANVAS_HEIGHT / 2;
export const PIPE_GAP = CANVAS_HEIGHT / 2 - HEIGHT_GROUND - 50;

// movements
export const JUMP_SPEED = -200;
export const FALL_SPEED = -800;
export const SPEED = 2;
